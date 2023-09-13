class Node {
    child: Record<string, Node> = {};
    isEnd = false;
}
  
class MainClass {
    root: Node = new Node();
  
    UploadArray(array: string[]): void {
        for (const elements of array) {
            let currentNode: Node = this.root;
            for (let i = 0; i < elements.length; i++) {
                const letter = elements[i];
                const lowerLetter = letter.toLowerCase();
                if (!(lowerLetter in currentNode.child)) {
                    currentNode.child[lowerLetter] = new Node();
                }
                currentNode = currentNode.child[lowerLetter];
                }
                currentNode.isEnd = true;
            }
    }
  
    private __traverse(currentNode: Node, prefix: string, words: string[]): string[] {
        if (currentNode.isEnd) {
            words.push(prefix);
        }
        for (const child in currentNode.child) {
            this.__traverse(currentNode.child[child], prefix + child, words);
        }
        return words;
    }
  
    searchResponse(prefix: string): string[] {
        let currentNode: Node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const letter = prefix[i];
            const lowerLetter = letter.toLowerCase();
            if (!(lowerLetter in currentNode.child)) {
                return [];
            }
            currentNode = currentNode.child[lowerLetter];
        }
        return this.__traverse(currentNode, prefix, []);
    }
}
  
export const prefix = new MainClass();
  