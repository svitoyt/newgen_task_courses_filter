# newgen_task_courses_filter
The filter where the user can set a price range and get a list of suitable courses.

Description RUS:
Мною был взят объект (список курсов: название и цена), к которому я прописал следующую функцию. Ее основная задача - отобрать только те курсы, ценовой диапазон которых подходит условию, вводимому пользователем. Всего были выбраны 4 условия (максимально полный вариант), при которых курсы будут актуальны для пользователя. Эти условия следующие: 
1) мин Цена пользователя < мин Цены курса и макс  Цена пользователя >  макс Цены курса 
2) мин Цена пользователя > мин Цены курса и макс  Цена пользователя >  макс Цены курса, а мин Цена пользователя < макс Цены курса 
3) мин Цена пользователя < мин Цены курса и макс  Цена пользователя <  макс Цены курса, а макс Цена пользователя > мин Цены курса 
4) мин Цена пользователя > мин Цены курса и макс  Цена пользователя <  макс Цены курса 
(все условия разделены логическим оператором ИЛИ). 
Таким образом, пользователь получает максимально полный список подходящих для него курсов полностью или частично попадающих под его ценовой диапозон (наилучший вариант для продажи курсов). Также созданная функция проверяет пользователя на предмет возможных ошибок (если введенные мин больше макс), и фильтрует выводимые курсы по возростанию мин цены курсов.

Description ENG:
I took an object (a list of courses: name and price), to which I prescribed the following function. Its main task is to select only those courses whose price range fits the condition entered by the user. In total, 4 conditions were selected (the most complete option), under which the courses will be relevant to the user. These conditions are as follows: 
1) min User Price < min Course Price and max User Price > max Course Price 
2) min User Price > min Course Price and max User Price > max Course Price and min User Price < max Course Price 
3) min User Price < min Course Price and max User Price < max Course Price, and max User Price > min Course Price 
4) min User Price > min Course Price and max User Price < max Course Price 
(all conditions are separated by the logical operator OR). Thus, the user receives the most complete list of suitable courses for him, fully or partially falling under his price range. Also, the created function checks the user for possible errors (if the entered min is greater than max), and also filters the output courses by increasing the minimum price of the courses.
