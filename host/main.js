// Vue.jsrequires this (simulates dotenv)
globalThis.process = { env: { NODE_ENV: 'development' } }

async function sleep(ms, msg = `[HOST] System initialization in progress - waiting ${ms / 1000} seconds...`) {
  if (msg) console.log(msg)
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  await sleep(5000, '[HOST] System initialization started - waiting 5 seconds...')

  console.log('[HOST] Dynamically importing vue exports...')
  const { default: Vue } = await import('vue')
  console.log('[HOST] Libraries loaded:')
  console.log('[HOST] > Vue =', Vue)
  console.log('')

  await sleep(1000)

  console.log('[HOST] Dynamically importing library1 exports...')
  const { App } = await import('library1')
  console.log('[HOST] Exports loaded:')
  console.log('[HOST] > App =', App)
  console.log('')

  await sleep(1000)

  console.log('[HOST] Creating Vue.js app with App component')
  const app = new Vue({ render: h => h(App, { props: { name: 'Jane Smith' } }) }).$mount('#app')
  console.log('[HOST] app =', app)
  console.log('')

  console.log('[HOST] System initialized.')
}

main()
