///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * _.after(num, func);
 *
 *
 * 指定该函数被调用一次或多次后，立即执行 func 函数
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.before(num, func);
 *
 *
 * 指定该函数被限定调用 num 之前，返回最后一次调用的结果
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.ary(func, limitLength);
 *
 *
 * 用于限制 func 的传入形参个数
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.bind(func, thisArg, params);
 *
 *
 * 将 func 的 this 绑定为指定 thisArg ，并传入 params
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.bindKey(obj, key, params);             // 允许重新定义绑定函数即使它还不存在
 *
 *
 * 将 obj 的 this 绑定为指定 key ，并传入 params
 *
 * 返回新的绑定函数
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.curry(func, paramsLength): curryFunc;
 *
 *
 * 返回新的柯里化函数
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.curryRight(func, paramsLength): curryFunc;
 *
 *
 * 返回新的柯里化函数
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.debounce(func, wait, options): debounceFunc;
 *
 *
 * @options: leading: false;                // 指定在延迟开始前调用
 *
 *           maxWait: num;                  // 设置 func 允许被延迟的最大值
 *
 *           trailing: true;                // 指定在延迟结束后调用
 *
 *
 * 返回新的防抖动函数
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.throttle(func, wait, options): throttleFunc;
 *
 *
 * @options: leading: true;                 // 指定调用在节流开始前
 *
 *           trailing: true;                // 指定调用在节流结束后
 *
 * 返回节流的函数
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.defer(func, args): timerId;            // 当前堆栈清理完毕后调用
 *
 *
 * 推迟调用func，直到当前堆栈清理完毕，调用时，任何附加的参数会传给 func
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.delay(func, wait, args): timerId;      // 指定延迟时长后调用
 *
 *
 * 延迟 wait 毫秒后调用 func，调用时，任何附加的参数会传给func
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.flip(func);
 *
 *
 * 调用该函数时，接受反转的参数
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.memoize(func, resolveFunc): resolveFunc
 *
 *
 * 创建一个会缓存 func 结果的函数。 如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果
 *
 * 默认情况下用第一个参数作为缓存的 key
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.negate(predicate);
 *
 *
 * 对该函数的返回值取反 return !result;
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.once(func);
 *
 *
 * 创建一个只能调用 func 一次的函数
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.overArgs(func, iterator: arr): newFn;
 *
 *
 * 创建一个函数，调用func时参数为相对应的transforms的返回值
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.rearg(func, indexs): newFunc;
 *
 *
 * 将函数的参数根据 指定的 indexs 重新排列顺序传入
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.rest(func, start: func.length-1);
 *
 *
 * 创建一个函数，调用func时，this绑定到创建的新函数，并且start之后的参数作为数组传入
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.spread(func, [params]): newFunc;
 *
 *
 * 创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.unary(func): newFunc;
 *
 *
 * 创建一个最多接受一个参数的函数，忽略多余的参数
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.wrap(value, func): newFunc;
 *
 *
 * 创建一个函数。提供的 value 包装在 wrapper 函数的第一个参数里。 任何附加的参数都提供给 wrapper 函数
 *
 * 被调用时 this 绑定在创建的函数上
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////































