import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 'id4',
      category: 'сумки',
      title: 'Авоська',
      color: 'Тиффани',
      colorCode: '#09ebda',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque repellat quaerat sequi ipsum provident culpa quos quo, odio iusto.',
      price: 500,
      available: 5,
      features: ['eco', 'trend'],
      img: 'p4.png',
      offer: 'Exclusive'
    },
    {
      id: 'id1',
      category: 'сумки',
      title: 'Авоська',
      color: 'Хендерсон',
      colorCode: '#212e4e',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque repellat quaerat sequi ipsum provident culpa quos quo, odio iusto.',
      price: 500,
      available: 2,
      features: ['eco', 'trend'],
      img: 'p1.png',
      offer: 'NEW'
    },
    {
      id: 'id2',
      category: 'сумки',
      title: 'Авоська',
      color: 'Античный',
      colorCode: '#dba252',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque repellat quaerat sequi ipsum provident culpa quos quo, odio iusto.',
      price: 500,
      available: 1,
      features: ['eco', 'trend'],
      img: 'p2.png',
      offer: 'SALE'
    },
    {
      id: 'id3',
      category: 'сумки',
      title: 'Авоська',
      color: 'Барби',
      colorCode: '#ff7acc',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque repellat quaerat sequi ipsum provident culpa quos quo, odio iusto.',
      price: 500,
      available: 2,
      features: ['eco', 'trend'],
      img: 'p3.png',
      offer: 'NEW'
    },
    {
      id: 'id5',
      category: 'сумки',
      title: 'Авоська',
      color: 'Армейский',
      colorCode: '#244907',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque repellat quaerat sequi ipsum provident culpa quos quo, odio iusto.',
      price: 500,
      available: 1,
      features: ['eco', 'trend'],
      img: 'p5.png',
      offer: 'SALE'
    },
    {
      id: 'id6',
      category: 'сумки',
      title: 'Авоська',
      color: 'Лимонный',
      colorCode: '#ffff00',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque repellat quaerat sequi ipsum provident culpa quos quo, odio iusto.',
      price: 500,
      available: 5,
      features: ['eco', 'trend'],
      img: 'p6.png',
      offer: 'Exclusive'
    },
  ])

  const getProduct = (id) => {
    return products.value.filter(product => product.id === id)[0]
  }


  const getProductsList = (start, limit) => {
    return products.value.slice(start, limit)
  }

  return { products, getProduct, getProductsList }
})
