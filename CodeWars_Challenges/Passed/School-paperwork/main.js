function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m
}

// Difficulty 0/5

// Top Solution // 

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }