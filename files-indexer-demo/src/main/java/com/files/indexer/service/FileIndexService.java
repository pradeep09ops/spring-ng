package com.files.indexer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.files.indexer.dao.FileIndexRepository;
import com.files.indexer.FileIndex;

@Service
public class FileIndexService {
	
	@Autowired
	private FileIndexRepository fileIndexRepository;
	
	public FileIndex saveFileIndex(FileIndex fileIndex) {
		return fileIndexRepository.save(fileIndex);
	}
}
