export default function mo(emitter) {
  const reset = () => {
    emitter.off('returnAlert');
  };

  const callback = () => {
    return new Promise((resolve) => {
      reset();
      emitter.on('returnAlert', (f) => {
        reset();
        resolve(f);
      });
    });
  };

  const alert = (o) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: true });
    emitter.emit('showAlert', o);
    return callback();
  };

  const confirm = (o) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: false });
    emitter.emit('showAlert', o);
    return callback();
  };

  return { alert, confirm };
}
