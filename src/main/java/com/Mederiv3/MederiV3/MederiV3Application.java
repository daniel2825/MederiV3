package com.Mederiv3.MederiV3;


import java.beans.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.S3ObjectSummary;


@SpringBootApplication
@RestController
public class MederiV3Application {

	public static void main(String[] args) {
		SpringApplication.run(MederiV3Application.class, args);
	}
	
	@RequestMapping(value = "/daniel")
	   public String hello(@RequestParam(value="request",defaultValue="Daniel prueba final pasto esto es integracion y despliegue continuo funcioando el linux") String request) {
	    
		return request;

	   }
	
    @CrossOrigin(origins = "http://localhost:3000")/*Origen acceso react para acceso a retorno*/
    @RequestMapping(value="/items", method = RequestMethod.GET)
    
      //public ArrayList<S3ObjectSummary> getAllItems(){   
      public void getAllItems(){
    	/*
		AWSCredentials credentials = new BasicAWSCredentials(
	  			  "AKIA6RQZXOUO7DFWSRXL", 
	  			  "Pg8o2P47ghmvN+vm608iggpxn5zois/0IZHes+w6"
	  			);
	  	
	  	    AmazonS3 s3client = AmazonS3ClientBuilder
	  			  .standard()
	  			  .withCredentials(new AWSStaticCredentialsProvider(credentials))
	  			  .withRegion(Regions.US_EAST_2)
	  			  .build();*/
	  
	  	    /*Listar buckets en listas para formato de json*/
	  	   /* ArrayList<Bucket> buckets = (ArrayList<Bucket>) s3client.listBuckets();
	  	     for(Bucket bucket : buckets) {
	  	      System.out.println(bucket.getName());
	        	}
	  	
	  	     ListObjectsV2Result result = s3client.listObjectsV2(buckets.get(1).getName());
	  	     ArrayList<S3ObjectSummary> objects = (ArrayList<S3ObjectSummary>) result.getObjectSummaries();
	  	     for (S3ObjectSummary os: objects) {
	  	       System.out.println("* " + os.getKey());
	  	      }

	  	     
			return objects;*/
       }
	
   
   
    
    
    
}
