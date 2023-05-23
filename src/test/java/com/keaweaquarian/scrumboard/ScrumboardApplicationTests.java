package com.keaweaquarian.scrumboard;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
class ScrumboardApplicationTests {
Calculator underTest = new Calculator();
	@Test
	void itshouldAddNumers(){
		//given
		int a = 1;
		int b = 2;
		//when
		int result = underTest.add(a, b);

		//then
		int expected = 3;
		assertThat(result).isEqualTo(expected);
	}

	class Calculator{
		int add(int a, int b){
			return a + b;
		}
	}

}
