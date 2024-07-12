import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Your App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>Description of feature 1</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for feature 1</p>
          </CardContent>
          <CardFooter>
            <Button>Action 1</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
            <CardDescription>Description of feature 2</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for feature 2</p>
          </CardContent>
          <CardFooter>
            <Button>Action 2</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 3</CardTitle>
            <CardDescription>Description of feature 3</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for feature 3</p>
          </CardContent>
          <CardFooter>
            <Button>Action 3</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;