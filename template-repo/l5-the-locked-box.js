 var box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  content2: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.content2;
  }
};

function withBoxUnlocked(body) {
  var locked = box.locked;
  if (!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);
