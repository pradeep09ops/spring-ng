package com.files.indexer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.files.indexer.FileIndex;
import com.files.indexer.service.FileIndexService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FileIndexController {
	
	@Autowired
    private FileIndexService fileIndexService;
	
	@PostMapping("/api/saveIndex")
	public ResponseEntity<String> saveIndex(@RequestBody FileIndex fileIndex) {
		fileIndexService.saveFileIndex(fileIndex);
		return ResponseEntity.status(HttpStatus.OK).body("Saved Successfully");
	}
}
