import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'curry',
        title: 'Curry',
        description: 'Curry is a dish from the Indian subcontinent, and is a staple food in several regions of the world. It is a spicy, meaty, soup-like dish that is typically eaten with rice or with a side dish of curry leaves.',
        ingredients: [
          '1 tablespoon oil',
          '1 onion, chopped',
          '1 garlic clove, chopped',
          '2 tablespoon curry powder',
          '1 tablespoon red chilli powder',
        ],
        method: [
          'Heat oil in a large frying pan over medium heat.',
          'Add onion and garlic and cook for 5 minutes.',
          'Add curry powder and red chilli powder and cook for 5 minutes.',
        ]
      },
      {
        slug: 'ramen',
        title: 'Ramen',
        description: 'ramen is a dish from the Indian subcontinent, and is a staple food in several regions of the world. It is a spicy, meaty, soup-like dish that is typically eaten with rice or with a side dish of ramen leaves.',
        ingredients: [
          '1 tablespoon oil',
          '1 onion, chopped',
          '1 garlic clove, chopped',
          '2 tablespoon ramen powder',
          '1 tablespoon red chilli powder',
        ],
        method: [
          'Heat oil in a large frying pan over medium heat.',
          'Add onion and garlic and cook for 5 minutes.',
          'Add ramen powder and red chilli powder and cook for 5 minutes.',
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  },
})
