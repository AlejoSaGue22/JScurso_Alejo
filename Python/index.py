# # print(32 * 'pruebq')

# # true_or_not = 1
# # do_this_if_true = 2

# # el_clima_es_bueno = True
# # saldremos_a_caminar = False


# # if saldremos_a_caminar : 
# #             print("Opcion verdadera", el_clima_es_bueno)
# #             print("Opcion verdadera", el_clima_es_bueno)
# #             print("opcion Seguir")
# # print("seguit")



# # if saldremos_a_caminar :
# #             print("Opcion if", el_clima_es_bueno)
# #             print("Opcion if2", el_clima_es_bueno)
# # else: 
# #             print("Opcion else", el_clima_es_bueno)
# #             print("Opcion else2", el_clima_es_bueno)
# # print("Opcion fuera", el_clima_es_bueno)


# # largest_number = -999999999
# # number = int(input())
# # if number == -1:
# #     print(largest_number)
# #     exit()
# # if number > largest_number:
# #     largest_number = number
# #     print("entro en Otro if")


# # while number == 1:
# #     print("estas escribiendo 1")

# # numero_largo = -999999999
# # number = int(input("Introduce un numero o escribe el -1 para detener: "))

# # while number != -1:
# #     if number > numero_largo:
# #         numero_largo = number
# #     number = int(input("Ingresa un numero o escribe el -1 para detener: "))

# # print("El numero mas grande es: ", numero_largo)
# # # Ir a la línea 02

# # numbers = [111, 1, 7, 2, 1]
# # numbers.append(2201) # es como un push en js
# # print(len(numbers))
# # print(numbers)

# # print(numbers[-1])
# # numbers.insert(len(numbers) -1, 200122)
# # print(numbers)

# # del numbers[0]
# # print(numbers)

# # numbers[1], numbers[3] = numbers[3], numbers[1]
# # print(numbers)

# # my_list = [10, 8, 6, 4, 2]
# # new_list = my_list[:]   # seleccion de array
# # print(new_list)


# # my_list = [17, 3, 11, 5, 1, 9, 7, 15, 13]
# # largest = my_list[0]
 
# # for i in my_list[1:]:
# #     if i > largest:
# #         largest = i
 
# # print(largest)

# # # ----------------------------------------------
# # my_list2 = [0, 3, 12, 8, 2]

# # print(5 in my_list2)
# # print(5 not in my_list2)
# # print(12 in my_list2)

# # number = [5, 10, 2, 4, 1, 6]
# # del number[1:3]
# # print(number)

# # # ----------------------------------------------

# # my_list = [17, 3, 11, 5, 1, 9, 7, 15, 13]
# # largest = my_list[0]

# # for i in range(1, len(my_list)):
# #     if my_list[i] > largest:
# #         largest = my_list[i]

# # print(largest)


# # Si necesitas ahorrar energía de la computadora, puedes usar una rebanada:

# # # ----------------------------------------------

# # my_list = [17, 3, 11, 5, 1, 9, 7, 15, 13]
# # largest = my_list[0]
 
# # for i in my_list[1:]:
# #     if i > largest:
# #         largest = i
 
# # print(largest)

# # # ----------------------------------------------

# my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# # to_find = 5
# # found = False
 
# # for i in range(len(my_list)):
# #     found = my_list[i] == to_find
# #     if found:
# #         break
 
# # if found:
# #     print("Elemento encontrado en el índice", i)
# # else:
# #     print("ausente")
 
# # # ----------------------------------------------

# # drawn = [5, 11, 9, 42, 3, 49]
# # bets = [3, 7, 11, 42, 34, 49]
# # hits = 0
 
# # for number in bets:
# #     if number in drawn:
# #         hits += 1
 
# # print(hits)
# # t = [[3-i for i in range (3)] for j in range (3)]
# # s = 0
# # for i in range(3):
# #     s += t[i][i]
# # print(s)



# # if len(my_list) > 0:
# #     print("entro en el vondicional if", len(my_list))
# # else:
# #     print("no entro en el condicional if", len(my_list))

#  # funciones


# # def message():
# #     print("Ingresar valor:")

# # print("Inicia aqui:")
# # message()
# # print("Termina aqui:")


# # print("comienza aqui")
# # def message():
# #     print("Ingresa el valor")

# # message()

# # print("Termina aqui")

# # print("Comienza aqui.")
 
# # def message():
# #     print("Ingresar valor: ")
 

# # message()
# # a = int(input())
# # message()
# # b = int(input())
# # message()
# # c = int(input())


# # def message(number):
# #     print("Ingresa un número:", number)
 
# # message(1)



# # def message(what, number):
# #     print("Ingresa", what, "número", number)
 
# # message("teléfono", 11)
# # message("precio", 5)
# # message("número", "number")



# # def introduction(first_name, last_name):
# #     print("Hola, mi nombre es", first_name, last_name)
 
# # introduction("Luke", "Skywalker")
# # introduction("Jesse", "Quick")
# # introduction("Clark", "Kent")

# # #Ejemplo 1
# # def subtra(a, b):
# #     print(a - b)
 
# # subtra(5, 2) # salida: 3
# # subtra(2, 5) # salida: -3
 
 
# # #Ejemplo 2
# # def subtra(a, b):
# #     print(a - b)
 
# # subtra(a=5, b=2) # salida: 3
# # subtra(b=2, a=5) # salida: 3
 
# # #Ex. 3
# # def subtra(a, b):
# #     print(a - b)
 
# # subtra(5, b=2) # salida: 3
# # subtra(5, 2) # salida: 3
 

# # def subtra(a, b):
# #     print(a - b)
 
# # subtra(5, b=2) # salida: 3
# # subtra(a=5, 2) # Syntax Error


# # def intro(a="James Bond", b="Bond"):
# #      print("Mi nombre es", b + ".", a + ".")
# # intro()

# # def intro(a, b="Bond"):
# #     print("Mi nombre es", b + ".", a + ".")
 
# # intro("Susan")


# # TUPLAS 
# tuple_1 = (1, 2, 4, 8)
# tuple_2 = 1., .5, .25, .125
 
# print(tuple_1)
# print(tuple_2)

# empty_tuple = ()

# one_element_tuple_1 = (1, )
# one_element_tuple_2 = 1.,

# # Si deseas leer los elementos de una tupla, lo puedes hacer de la misma manera que se hace con los arrays.
# my_tuple = (1, 10, 100, 1000)

# print(my_tuple[0])
# print(my_tuple[-1])
# print(my_tuple[1:])
# print(my_tuple[:-2])

# for elem in my_tuple:
#     print(elem)


# # las tuplas no se pueden modificar, agregar o eliminar (aparecera un error si se intenta realizar)
# # my_tuple = (1, 10, 100, 1000)
 
# # my_tuple.append(10000)
# # del my_tuple[0]
# # my_tuple[1] = -10


# # esto si se puede hacer con tuplas
# # my_tuple = (1, 10, 100)

# # t1 = my_tuple + (1000, 10000)
# # t2 = my_tuple * 3

# # print(len(t2))
# # print(t1)
# # print(t2)
# # print(10 in my_tuple)
# # print(-10 not in my_tuple)




# def f(x):
#     if x == 0:
#         return 0
#     return x + f(x - 1)
 
 
# print(f(3))



# def fun(x):
#     x += 1
#     return x
 
 
# x = 2
# x = fun(x + 1)
# print(x)


# def fun(x):
#     global y
#     y = x * x
#     return y
 
 
# fun(2)
# print(y)

# def any():
#     print(var + 1, end='')
 
# var = 1
# any()
# print(var)


# # my_list = ['Mary', 'had', 'a', 'little', 'lamb']
# # def my_list(my_list):
# #     del my_list[3]
# #     my_list[3] = 'ram'
 
# # print(my_list(my_list))

# def fun(x, y, z):
#     return x + 2 * y + 3 * z
 
# print(fun(0, z=1, y=3))

# def fun(inp=2, out=3):
#     return inp * out
 
# print(fun(out=2))



# dictionary = {'one': 'two', 'three': 'one', 'two': 'three'}
# v = dictionary['one']
 
# for k in range(len(dictionary)):
#     v = dictionary[v]
 
# print(v)


# tup = (1, 2, 4, 8)
# tup = tup[1:-1]
# tup = tup[0]
# print(tup)

# try:
#     value = input("Ingresa un valor: ")
#     print(value/value)
# except ValueError:
#     print("Entrada incorrecta...")
# except ZeroDivisionError:
#     print("Entrada errónea...")
# except TypeError:
#     print("Entrada muy errónea...")
# except:
#     print("¡Buuu!")



import calendar
 
c = calendar.Calendar()
 
for weekday in c.iterweekdays():
    print(weekday, end=" ")
 







        




