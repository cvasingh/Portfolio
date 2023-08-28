
import ReactCodeMirror from "@uiw/react-codemirror";


export default function JsonEditorPanel({
  paneValue,
  setPaneValue,
  isEditable = true,
}) {
  return (
    <ReactCodeMirror
      editable={isEditable}
      className="text-left"
      value={paneValue}
      minHeight="100px"
      theme='light'
      onChange={(e) => setPaneValue(JSON.stringify(e))}
    />
  )
}