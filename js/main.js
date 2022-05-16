 //Создаем функции для обработки событий по нажатию по кнопкам калькулятора

      //назначаем глобальные переменные для работы с ними во всех классах
      var memory = 0;
      var count_digit_all = 0;
      var count_digit_after = 0;
      var last_expression = "";
      var flag_equal = false;
      var flag_dot = false;

      //функция отвечает за добавление символа на экран
      function insert(num){
         if(document.form.textview.value.indexOf('.') != -1){
            var position = document.form.textview.value.indexOf('.');
            var lenstr = document.form.textview.value.length;

            //проверка на 8 знаков после запятой
            if(count_digit_after < 8){
               document.form.textview.value += num;
               count_digit_all++;
               count_digit_after++;
            }
         }

         //проверка на 12 знаков перед запятой
         else if(count_digit_all < 12){
            document.form.textview.value += num;
            count_digit_all++;
         }
      }

      //функция отвечает за добавление арифметической операции и точки на экран
      function insert_symbol(num){
            document.form.textview.value += num;
            count_digit_all = 0;
            count_digit_after = 0;
      }

      //функция отвечает за очищение экрана
      function clean(){
         document.form.textview.value = "";
         count_digit_all = 0;
         count_digit_after = 0;
      }

      //функция отвечает за удаление последнего символа на экране
      function back(){
         var exp = document.form.textview.value;
         document.form.textview.value = exp.slice(0, -1);
      }

      //функция отвечает за операцию "="
      function equal(){
         var exp = document.form.textview.value;
         if(exp){
            last_expression = document.form.textview.value;
            flag_equal = true;
            document.form.textview.value = eval(exp);
         }
      }

      //функция отвечает за добавления числа к числу, которое хранится в памяти
      function memappend(){
         var exp = document.form.textview.value;
         if(exp){
            document.form.textview.value = eval(exp);
            memory += Number(document.form.textview.value);
         }
      }

      //функция отвечает за вычитание из числа, которое хранится в памяти, введенного числа
      function memsubtract(){
         var exp = document.form.textview.value;
         if(exp){
            document.form.textview.value = eval(exp);
            memory -= Number(document.form.textview.value);
         }
      }

      //функция выводит значение в памяти калькулятора
      function memresult(){
         if(memory != null){
            document.form.textview.value = memory;
         }
         else{
            document.form.textview.value = '0';
         }
      }

      //функция очищает память калькулятора
      function memclear(){
         memory = null;
      }

      //функция сохраняет число с экрана в память
      function memsavedigit(){
         memory = Number(document.form.textview.value);
      }

      //функция отвечает за вывод на экран последнего выражения
      function rvt(){
         if(flag_equal = true){
            document.form.textview.value = last_expression;
         }
      }

      //функция меняет знак с "+" на "-" и обратно
      function changeznak(){
         var exp = document.form.textview.value;
         try{
            var buff_int = Number(document.form.textview.value);
            buff_int = buff_int * -1;
            document.form.textview.value = String(buff_int);
         }
      catch{  
        
      }
      }