package hello.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import hello.entity.Gender;
import hello.entity.User;
/**
 * 
 * @author lmthien
 *
 */
@RestController
public class UserController {
	private static final AtomicLong counter = new AtomicLong();

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public User[] getUsers(@RequestParam(value = "number", defaultValue = "10") String numberStr) {
		int numberOfUsers = Integer.parseInt(numberStr);
		List<User> list = new ArrayList<>();
		for (int i = 0; i < numberOfUsers; i++) {
			int age = (int) (Math.random() * 10);
			Gender g = (i % 2 == 0 ? Gender.MALE : Gender.FEMALE);
			long id = counter.incrementAndGet();
			String name = "Person " + id;
			list.add(new User(id, name, age, g));
		}
		return list.toArray(new User[numberOfUsers]);
	}

}
