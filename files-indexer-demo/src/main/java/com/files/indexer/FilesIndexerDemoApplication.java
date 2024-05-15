package com.files.indexer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.files.*")
@EntityScan("com.files.*")
public class FilesIndexerDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(FilesIndexerDemoApplication.class, args);
	}

}
