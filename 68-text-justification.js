/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function(words, maxWidth) {
  const res = [];
  let curRow = [];
  let numOfChars = 0;

  for (let w of words) {
    // Kiểm tra xem có thể thêm từ w vào dòng hiện tại không
    if (numOfChars + w.length + curRow.length > maxWidth) {
      // Điều chỉnh khoảng trắng giữa các từ để dòng đầy đủ chiều rộng maxWidth
      for (let i = 0; i < maxWidth - numOfChars; i++) {
        if (curRow.length === 1) {
          curRow[0] += ' '; // Nếu dòng có một từ, thêm khoảng trắng vào cuối từ đó
        } else {
          curRow[i % (curRow.length - 1)] += ' '; // Phân bố khoảng trắng đều cho các từ trong dòng
        }
      }
      // Đẩy dòng đã đầy vào kết quả
      console.log(curRow);
      res.push(curRow.join(''));
      curRow = []; // Đặt lại dòng mới
      numOfChars = 0; // Đặt lại số ký tự hiện tại
    }
    curRow.push(w); // Thêm từ vào dòng hiện tại
    console.log(curRow);
    numOfChars += w.length; // Cập nhật số ký tự hiện tại
  }

  // Xử lý dòng cuối cùng không đầy đủ maxWidth
  const numOfSpace = maxWidth - numOfChars - (curRow.length - 1); // Tính số khoảng trắng cần thêm vào cuối dòng
  let tail = '';
  for (let i = 0; i < numOfSpace; i++) tail += ' '; // Tạo chuỗi khoảng trắng cuối dòng
  res.push(curRow.join(' ') + tail); // Thêm dòng cuối cùng vào kết quả

  return res; // Trả về kết quả cuối cùng
};
let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 6;
console.log(fullJustify(words, maxWidth));
// another

/**
 * @param {string[]} words
 * @param {number} L
 * @returns {string[]}
 */
const fullJustify2 = function(words, L) {
  const res = [""];
  if (words.length === 0 || L === 0) {
    return res;
  } else {
    res.shift();
    for (let i = 0, k, l; i < words.length; i += k) {
      for (
        k = l = 0;
        i + k < words.length && l + words[i + k].length <= L - k;
        k++
      ) {
        l += words[i + k].length;
      }
      let tmp = words[i];
      for (j = 0; j < k - 1; j++) {
        if (i + k >= words.length) {
          tmp += " ";
        } else {
          // for (i = 0; i < ((L - l) / (k - 1) + (j < (L - l) % (k - 1))) - 1; i++) {
          //     tmp += ' ';
          // }
          tmp += Array(
            parseInt((L - l) / (k - 1) + (j < (L - l) % (k - 1))) + 1
          ).join(" ");
        }
        // tmp += (L - l) / (k - 1) + (j < (L - l) % (k - 1)) + ' ';
        tmp += words[i + j + 1];
      }
      // for (i = 0; i < (L - tmp.length); i++) {
      //     tmp += ' '
      // }
      tmp += Array(parseInt(L - tmp.length) + 1).join(" ");
      // tmp += L - tmp.length + ' ';
      res.push(tmp);
    }
    return res;
  }
};
