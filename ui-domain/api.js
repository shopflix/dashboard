/**
 * Created by Andste on 2018/7/2.
 * base    : Based on the businessAPI
 * buyer   : buyersAPI
 * seller  : Business centerAPI
 * admin   ：Background managementAPI
 */

let env = process.server
  ? process.env
  : (global.window && window.__NUXT__.state ? window.__NUXT__.state.env : {})

// The development environment
export const dev = {
  address: 'http://52.53.155.58'
}

// The production environment
export const pro = {
  address: env.API_ADDRESS || 'http://52.53.155.58'
}
