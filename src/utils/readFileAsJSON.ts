import { ElNotification } from 'element-plus'

export function readFileAsJSON<T = unknown>(file: File) {
  return new Promise<void | T>((resolve) => {
    if (!file) {
      ElNotification({ title: 'Ошибка при загрузке файла', type: 'error' })

      return resolve()
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      if (!fileReader.result) {
        return ElNotification({ title: 'Ошибка при загрузке файла', type: 'error' })
      }

      resolve(JSON.parse(fileReader.result as string) as unknown as T)

      ElNotification({ title: 'Статы успешно импортированы!', type: 'success' })
    }

    fileReader.onerror = () => {
      ElNotification({ title: 'Ошибка при загрузке файла', type: 'error' })

      return resolve()
    }

    fileReader.readAsText(file)
  })
}
