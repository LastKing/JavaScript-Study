/**
 * https://segmentfault.com/q/1010000009196929
 * Created by Rain on 2017/4/26.
 */
var str = 'a2b2a';
var str2 = 'ACDCDCDAD';

console.log(is_palindrome(str));

console.log(minCut(str));
console.log(minCut(str2));

function minCut(s) {
  if (!s || s.length === 0) {
    return 0;
  }
  var dp = [s.length];

  dp[0] = 0;
  for (var i = 1; i < s.length; i++) {
    dp[i] = is_palindrome(s.substring(0, i + 1)) ? 0 : i + 1;

    for (var j = i; j >= 1; j--) {
      if (is_palindrome(s.substring(j, i + 1))) {
        dp[i] = Math.min(dp[i], dp[j - 1] + 1);
      }
    }
  }
  return dp[s.length - 1];
}

function is_palindrome(s) {
  var begin = 0;
  var end = s.length - 1;

  while (begin < end) {
    if (s[end] !== s[begin])
      return false;
    end--;
    begin++;
  }

  return true;
}



