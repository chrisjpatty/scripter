const MarkHotkey = ({ type, key }) => ({
  onKeyDown(event, editor, next) {
    if (!event.ctrlKey || event.key !== key) return next();
    event.preventDefault();
    editor.toggleMark(type);
  }
});

const plugins = [
  MarkHotkey({
    type: "bold",
    key: "b"
  }),
  MarkHotkey({
    type: "italic",
    key: "i"
  }),
  MarkHotkey({
    type: "underline",
    key: "u"
  })
];

export default plugins
