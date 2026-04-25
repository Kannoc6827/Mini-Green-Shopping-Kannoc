#include <iostream>
#include "../src/structures.h"
using namespace std;

void test_add_product() {
    cout << "Test add product...\n";
    // giả lập test
}

void test_search_product() {
    cout << "Test search product...\n";
}

void test_cart() {
    cout << "Test cart operations...\n";
}

void test_undo() {
    cout << "Test undo...\n";
}

void test_edge_case() {
    cout << "Test edge case (empty cart)...\n";
}

int main() {
    test_add_product();
    test_search_product();
    test_cart();
    test_undo();
    test_edge_case();
    cout << "All tests done!\n";
}