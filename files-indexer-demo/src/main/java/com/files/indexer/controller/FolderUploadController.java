package com.files.indexer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.files.indexer.service.FolderUploadService;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FolderUploadController {
	
	@Autowired
    private FolderUploadService fileUploadService;

	List<String> fileNames = new ArrayList<String>();

	@PostMapping("/upload/copyFiles")
	public ResponseEntity<String> fileUpload(@RequestParam("file") MultipartFile[] file) {
		fileUploadService.init();
		for(MultipartFile f: file) {
			if(f.getOriginalFilename().endsWith(".pdf")) {
				fileUploadService.saveFile(f);
				fileNames.add(f.getOriginalFilename());
			}
		}
		String msg = "Files " + fileNames + " uploaded successfully";
		return ResponseEntity.status(HttpStatus.OK).body(msg);
	}

	@GetMapping("/upload/getFiles")
    public ResponseEntity<List<String>> getFiles() throws IOException {
    	try {
    		List<File> files = fileUploadService.listFiles();
	        if (files != null) {
	          	fileNames = files.stream().filter(f -> f.getName().endsWith(".pdf"))
	            			.map(File::getName).collect(Collectors.toList());
	        }
	        return ResponseEntity.ok().body(fileNames);
    	} catch(Exception e) {
    		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(fileNames);
    	}
    }

    @GetMapping("/upload/loadFile/{fileName}")
    public ResponseEntity<byte[]> loadFile(@PathVariable String fileName) {
        Resource file = fileUploadService.loadFile(fileName);
        try {
			return ResponseEntity.ok()
			        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
			        .header(HttpHeaders.CONTENT_TYPE, "application/pdf")
			        .body(file.getContentAsByteArray());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
			        .header(HttpHeaders.CONTENT_TYPE, "application/pdf").body(null);
		}
    }

}