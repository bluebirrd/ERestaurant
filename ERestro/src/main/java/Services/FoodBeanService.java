package Services;

import java.util.List;

import com.bionic.edu.ERestro.Food;
import com.bionic.edu.ERestro.FoodCategory;

public interface FoodBeanService {
	public Food findById();
	public void save(Food dish);
	public List<Food> getAllFoodList();
	public List<Food> getListByCategory(FoodCategory foodCategory);
	public List<FoodCategory> getCategoriesList();
}
