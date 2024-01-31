


const useLocalStorage = () => {
  const setStorage = (key, value)=>{
    localStorage.setItem(key, value)
  }

  const getStorage  = (key)=>{
    return localStorage.getItem(key)
  }
  return [setStorage, getStorage]
}

export default useLocalStorage