const { default: Axios } = require("axios")
const { ref } = require("vue")

export default function useUrlLoader (url) {
  const result = ref(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  Axios.get(url)
    .then(res => {
      loading.value = false
      loaded.value = true
      result.value = res.data
    })
    .catch(res => {
      error.value = res
      loading.value = false
    })
  
  return {
    result,
    loading,
    loaded,
    error
  }
}