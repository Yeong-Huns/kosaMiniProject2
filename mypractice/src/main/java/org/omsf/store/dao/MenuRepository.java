package org.omsf.store.dao;

import java.util.List;
import java.util.Optional;

import org.omsf.store.model.Menu;

public interface MenuRepository {
	
	List<Menu> getMenusByStoreNo(int storeNo);
	Optional<Menu> getMenuByMenuNo(int menuNo);
	void createMenu(Menu menu);
	void updateMenu(Menu menu);
	void deleteMenu(int MenuNo);    
}
