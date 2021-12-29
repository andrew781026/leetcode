// 二元樹
class BinaryTree {

    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const myTree = new BinaryTree(10);
myTree.left = new BinaryTree(6, new BinaryTree(3), new BinaryTree(8));
myTree.right = new BinaryTree(15, null, new BinaryTree(20));

console.log(myTree)

// 如果有個 2 元樹 , 長成以下
/*
        10
       /  \
      6    15
     / \     \
    3   8    20
    如果是 BFS ( Breadth First Search )
    1. 建立 queue . visited 2 個陣列                         - queue = [] / visited = []
    2. 從 10 開始                                            - queue = [] / visited = [ 10 ]
    3. 將 10 的 child 從左至右加到 queue 陣列                   - queue = [ 6 , 15 ] / visited = [ 10 ]
    4. 將 queue 的第 1 個元素 ( 6 ) 取出 , 放入 visited 陣列    - queue = [ 15 ] / visited = [ 10 , 6 ]
    5. 將 6 的 child 從左至右加到 queue 陣列                    - queue = [ 15 , 3 , 8 ] / visited = [ 10 , 6 ]
    6. 將 queue 的第 1 個元素 ( 15 ) 取出 , 放入 visited 陣列    - queue = [ 3 , 8 ] / visited = [ 10  , 6  , 15  ]
    ....以下步驟重複上述的動作
 */