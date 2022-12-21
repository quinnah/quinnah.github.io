import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("http://quinnah.github.io/blog/")
        self.assertIn("Quinna's Website", driver.title)

        for element in driver.find_elements(By.XPATH, "/html/body/main/section/h2"):
            # click on the link.
            print(element.text)

        for element in driver.find_elements(By.XPATH, '/html/body/main/section/a'): # click on each tag
            try:
                element.click()
            except:
                print("link does not yet exist")
                return 1

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main(warnings='ignore') #ignore warning