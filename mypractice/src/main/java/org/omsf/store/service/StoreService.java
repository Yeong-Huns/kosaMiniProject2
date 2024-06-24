package org.omsf.store.service;

import java.io.IOException;
import java.util.ArrayList;

import org.omsf.store.model.Store;
import org.springframework.web.multipart.MultipartFile;

public interface StoreService {

//	List<Store> getStoreByposition(String position);
	Store getStoreByNo(int storeNo);
	
	int createStore(Store store);
	void updateStore(Store store);
	void deleteStore(int storeNo);
	
	Store updateTotalReview(Store store);
	Store updateTotalRating(Store store);
	Store updateLikes(Store store);
	
	int UploadImage(ArrayList<MultipartFile> files, int storeNo);
	
	// jaeeun
	public void addStore(Store store) throws IOException;
}
