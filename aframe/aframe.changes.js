getTween: {
    var callback = data.callback;
}
onCompleted: {
    if (data.callback && data.callback !== '') this.emit(data.callback);
    else this.emit('animationend');
}