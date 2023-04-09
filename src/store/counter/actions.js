// permite aportar asincronía a los métodos. Son para comunicarse con el servidor

import getRandomInt from "@/helpers/getRandomInt"

export const incrementRandomInt = async ({ commit }) => {
    commit('setLoading', true)

    const randomInt = await getRandomInt()

    commit('incrementBy', randomInt)
    commit('setLoading', false)
}