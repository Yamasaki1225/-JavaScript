function Obserber() {
  this.listeners = [];
}

Obserber.prototype.on = function(func) {
  this.listeners.push(func);
}

Obserber.prototype.off = function(func) {
  var len = this.listener.length;
  for (var i = 0 ; i < len; i++) {
    var listener = this.listeners[i];
    if (listener === func) {
      this.listeners.splice(i, 1);
    }
  }
};

Obserber.prototype.trigger = function(event) {
  var len = this.listeners.length;

  for (var i = 0; i < len; i++ ) {
    var listener = this.listeners[i];
    listener();
  }
};
