package io.vandan.CCM;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
@RestController
@CrossOrigin
public class APIMethods {
	private final RestTemplate restTemplate;
	private String url;
	public APIMethods(RestTemplateBuilder rb) {
		restTemplate = rb.build();
		url = "https://track.clickbooth.com/i?lid=11851";
	}
	
	/* Fetch data from given url */
	
	@GetMapping("/getProduct")
	public String fetch(@RequestParam (name = "ua")String userAgent, @RequestParam String ip) {
		this.url  += "&ua="+userAgent+"​&ip=​"+ip+"​&subid1=&subid2=&subid3=&subid4=&subid5=";
		ResponseEntity<String> response = restTemplate.getForEntity(url,String.class);
		return response.getBody();
	}
}
