package com.files.indexer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.files.indexer.FileIndex;

@Repository
public interface FileIndexRepository extends JpaRepository<FileIndex, Integer> {
}
