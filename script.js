function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Example usage
console.log(isLeapYear(2020)); // 2020 is a leap year.
console.log(isLeapYear(2021)); // 2021 is not a leap year.
function getTicketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else {
        return "The ticket price is $20.";
    }
}

// Example usage
console.log(getTicketPrice(10)); // The ticket price is $10.
console.log(getTicketPrice(15)); // The ticket price is $15.
console.log(getTicketPrice(25)); // The ticket price is $20.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    function checkPalindrome(s, start, end) {
        if (start >= end) {
            return true;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        return checkPalindrome(s, start + 1, end - 1);
    }
    return checkPalindrome(str, 0, str.length - 1);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
