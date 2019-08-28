<template>
  <div class="optcart">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABAJJREFUWAnlWE1oE0EU7m7StDGmCSpWrIiiVkF7UURoT6VNarGFHiz1IOKpF0Hx5LXiSfTgRa/iRSjxpyCY/h08RUEQ9OAfWPDQWq2YGKVp87d+b5hJN5vZTW03U8GFycy8N+993743f1ktEolcMgzjZl1dnRfF/Lyanp4+ZhZsRFt3AD3soFOm0qxIg4OD/mQyuUjy+vr6xng8vmwdo7JfEcFYLJbRNC1NJAqFwnaVZGRYFQT5oK9UY242y4xUyqQEQYwRBJF/M4JI8TyP0oYTtG4tInsigrYpHhkZ8SYSiWFh4GZdLBYzfr//CZ7vdgS3EiBS3Ynqugwc5Brg6LZM54Ysk8l8xI7SJiUIYjkOss8OLBQK5bAd3bHTr0eOKXYaHFrT6fQRKUE4/8wBQnZA2I6y0F2w069H3t3dfRL2NP/T0lUMxQwHCPBadbWTAH0+35yUIObWB86oQTWznp6eLcBsRPmJRbIoJdjU1PSWE9MxFyqOw1qSBh6LHjBmCUdKcGxsLIWBBvRaX1/fXhqo6kH2WjjWHNVSgkyh62wl4zw+xA1UVSKCzgQRwAwxAsEDqpgRjq7rLILYauxTTAPFjQb1HuqrepBiFkEEqGoEk5zULlXkOM7qUozB38gAb7KDGyqpkDGWYqTaOcUY8IIz+qWE2QrI6iKIyL0kG9SFFdvatnA58AChGVEstre3fyE0220Gg6peudymm0qlmhEQD8oCrnN5R4JIsXKCIFSWXkeCwWCQEUQkbS+tbkcQWAfJJ+pPwrdtisW/O4S7YWBgICwMalkDq4v7Z/Of2rYE+UAWxaWlpZpHEXfA3cAcQjG8Xu9Dju9MEG/ECGJ3rynB3t5eutY9AN4m1I/wsaB6ivkbMIIwrBnB/v7+bfl8/j7wjmPu/UC5yLFZZXflZ0oMngc5mrSunyZ0McVFZAh/jq4BjP6k/QbWKXywYmcwI4CfagRniSBSfAVfwc5hvIa+uMCCt1Zqk0OuYzKuY21hI2Toh+GT/nOINfAG7TMg9478mB9Hgvh4NJrNZi/DYQsVsyG1IbOKSn2ZziJbBuFnMLjX0dExio25WDI2NUQETKLyJo6fzfj714o31uHQoEIjsJGzGvPHEG3SUd+sJ5nQ53I51sYqTQUCgQVsZcqO0fK3+p96VVMcjUYjmDttSNXTycnJ924GByv5KKZOp8fjSYyPjz+X+XYkyL9f3yJDEFzGXDoxMTHxWubob2XwHYVNHC9PK5nm9tDU1FTM6kcsc6tc9M+LBhzRxyI6itx6znJy5I+2L9rGKh5HgjAqHTnccqbCwxoFiFiZL/StWMyz4z6IlNIeGMTINtSPw+Hw3TXykZndgHA/ShfIJfAd5qps0B9g24WTdSvBTQAAAABJRU5ErkJggg=="
      alt
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.optcart {
  width: 90px;
  height: 90px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.9;
  border: 2px solid #ddd;
  img {
    width: 42px;
    height: 42px;
    margin-top:24px;
    margin-left: 24px;
  }
}
</style>