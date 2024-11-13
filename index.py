# print(32 * 'pruebq')

# true_or_not = 1
# do_this_if_true = 2

# el_clima_es_bueno = True
# saldremos_a_caminar = False


# if saldremos_a_caminar : 
#             print("Opcion verdadera", el_clima_es_bueno)
#             print("Opcion verdadera", el_clima_es_bueno)
#             print("opcion Seguir")
# print("seguit")



# if saldremos_a_caminar :
#             print("Opcion if", el_clima_es_bueno)
#             print("Opcion if2", el_clima_es_bueno)
# else: 
#             print("Opcion else", el_clima_es_bueno)
#             print("Opcion else2", el_clima_es_bueno)
# print("Opcion fuera", el_clima_es_bueno)


# largest_number = -999999999
# number = int(input())
# if number == -1:
#     print(largest_number)
#     exit()
# if number > largest_number:
#     largest_number = number
#     print("entro en Otro if")


# while number == 1:
#     print("estas escribiendo 1")

numero_largo = -999999999
number = int(input("Introduce un numero o escribe el -1 para detener: "))

while number != -1:
    if number > numero_largo:
        numero_largo = number
    number = int(input("Ingresa un numero o escribe el -1 para detener: "))

print("El numero mas grande es: ", numero_largo)
# Ir a la línea 02

numbers = [111, 1, 7, 2, 1]
numbers.append(2201)
print(len(numbers))
print(numbers)

print(numbers[-1])
numbers.insert(len(numbers) -1, 200122)
print(numbers)

del numbers[0]
print(numbers)

numbers[1], numbers[3] = numbers[3], numbers[1]
print(numbers)














        




