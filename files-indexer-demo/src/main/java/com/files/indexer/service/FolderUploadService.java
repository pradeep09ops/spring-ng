package com.files.indexer.service;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FolderUploadService {

    private final Path location = Paths.get("upload");

    public void saveFile(MultipartFile multipartFile) {
        try {
        	String destFileName = multipartFile.getOriginalFilename().substring(multipartFile.getOriginalFilename().lastIndexOf("/")+1);
            Files.copy(multipartFile.getInputStream(), this.location.resolve(destFileName),
            		StandardCopyOption.REPLACE_EXISTING);
        }catch (Exception e) {
            throw new RuntimeException("Failed"+e);
        }
    }
    
    public List<File> listFiles() throws IOException {
    	try {
			List<File> allFiles = Files.walk(location).map(Path::toFile).collect(Collectors.toList());
			return allFiles;
		} catch (IOException e) {
			throw new IOException("Exception occured" +e);
		}
    }

    public Resource loadFile(String fileName) {
        try{
            Path file = location.resolve(fileName);
            Resource resource = new UrlResource(file.toUri());
            if(resource.exists() || resource.isReadable()) {
                return  resource;
            } else {
                throw new RuntimeException("Failed");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Failed");
        }
    }

    public void init() {
        try {
        	FileSystemUtils.deleteRecursively(location.toFile());
            Files.createDirectories(location);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize storage!");
        }
    }

}
