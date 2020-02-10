package com.wm.springbootfileupload;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.wm.springbootfileupload.service.FileUploadService;

import javax.annotation.Resource;

@SpringBootApplication
public class SpringbootFileuploadApplication implements CommandLineRunner {

	@Resource
	FileUploadService fileUploadService;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootFileuploadApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		fileUploadService.deleteAll();
		fileUploadService.init();
	}
}
