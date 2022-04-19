import { createStore, useStore } from "vuex"

type State = {
    countHome: number
    countAbout: number
}

export const store = createStore<State>({
    state: {
        countHome: 0,
        countAbout: 0
    },
    mutations: {
        setCountHome(state, payload) {
            state.countHome = payload
        },
        setCountAbout(state, payload) {
            state.countAbout = payload
        }
    },
    actions: {
        addCountHome({ commit, state }) {
            commit('setCountHome', state.countHome + 1)
        },
        addCountAbout({ commit, state}) {
            commit('setCountAbout', state.countAbout + 1)
        },
        reset({ commit }) {
            commit('setCountHome', 0)
            commit('setCountAbout', 0)
        }
    }
})

export const useRootStore = () => useStore<State>()