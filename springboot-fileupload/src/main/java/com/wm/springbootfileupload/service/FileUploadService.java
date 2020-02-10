package com.wm.springbootfileupload.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileUploadService {

    private final Path location = Paths.get("upload");

    public void storeFile(MultipartFile multipartFile) {
        try {
            Files.copy(multipartFile.getInputStream(), this.location.resolve(multipartFile.getOriginalFilename()));
        }catch (Exception e) {
            throw new RuntimeException("Failed");
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

    public void deleteAll() {
        FileSystemUtils.deleteRecursively(location.toFile());
    }

    public void init() {
        try {
            Files.createDirectory(location);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize storage!");
        }
    }

}
