package hello.entity;

/**
 * 
 * @author lmthien
 *
 */
public class User {
	private final String name;
	private final int age;
	private final Gender gender;
	private final long id;

	public long getId() {
		return id;
	}

	public User(long id, String name, int age, Gender gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.id = id;
	}

	public Gender getGender() {
		return gender;
	}

	public String getName() {
		return name;
	}

	public int getAge() {
		return age;
	}
}
