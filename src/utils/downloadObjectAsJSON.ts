export function downloadObjectAsJSON(exportObj: object, exportName: string) {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj, null, 2))
  const downloadAnchorNode = document.createElement('a')

  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', exportName + '.json')

  document.body.appendChild(downloadAnchorNode)

  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
