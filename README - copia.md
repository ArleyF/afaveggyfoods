## <center><big> Información del trabajo</big></center>

### Integrantes:
- Jaime Alexis Herrera Ruiz - 1040732222 - Ingeniería de Sistemas
- Arley Fuentes Arenales - 1038439006 - Ingeniería de Sistemas

### Dataset en Kaggle:
- [Personal key indicators of heart disease](https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease)

### Obtención de datos:
- Se utiliza un link de un repositorio en GitHub donde está alojado el dataset. [Link del repositorio](https://github.com/ArleyF/proyecto_enfermedades_cardiacas)

- Se guarda la url en una variable ("url") y luego esta es leída y almacenada en la variable "df" utilizando la librería pandas así:

~~~python
import pandas as pd

url = "https://raw.githubusercontent.com/ArleyF/proyecto_enfermedades_cardiacas/master/dataset/heart_2020_modified.csv"
df = pd.read_csv(url)
~~~

### 1. Cambios en el dataset:
Se eliminan entre el 5% al 9% de los datos de 4 columnas:

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ArleyF/proyecto_enfermedades_cardiacas/blob/master/01_modificacion_del_dataset.ipynb)

### 2. Exploración de los datos
Se analiza el comportamiento de los datos antes de empezar con la limpieza:

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ArleyF/proyecto_enfermedades_cardiacas/blob/master/02_exploracion_de_datos.ipynb)

### 3. Limpieza de datos
Se realiza la limpieza de los datos (Tranformación y sustitución de datos faltantes):

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ArleyF/proyecto_enfermedades_cardiacas/blob/master/03_limpieza_de_datos.ipynb)

### 4. Modelos supervisados
Se realizan 7 modelos: Regresión logística, vecinos más cercanos, árbol de decisión, redes neuronales, máquina de vectores de soporte, bosques aleatorios y Naive-Bayes

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ArleyF/proyecto_enfermedades_cardiacas/blob/master/04_modelos_supervisados.ipynb)

### 5. Modelos no supervisados
Se utiliza PCA y Clustering

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ArleyF/proyecto_enfermedades_cardiacas/blob/master/05_modelos_no_supervisados.ipynb)

## Video: Entrega Final 
[![Alt text](https://img.youtube.com/vi/_-d57pqgqpU/0.jpg)](https://youtu.be/_-d57pqgqpU)
