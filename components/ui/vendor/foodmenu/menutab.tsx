import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
import FoodEdit from "@/components/ui/vendor/foodmenu/menuedit";

export function TabsMenu() {
  return (
    <Tabs defaultValue="account" className="w-full mt-2">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="account" className="rounded-full"><span>Main</span></TabsTrigger>
        <TabsTrigger value="desert" className="rounded-full">Desert</TabsTrigger>
        <TabsTrigger value="drinks" className="rounded-full">Drinks</TabsTrigger>
        <TabsTrigger value="side-dish" className="rounded-full">Side Dish</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <FoodEdit/>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="desert">
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="drinks">
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="side-dish">
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid grid-row items-center place-items-stretch mt-4 rounded-lg">
              <div className="rounded-full mt-2">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="w-full h-32"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name" className="font-bold">Fish Fillets</Label>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="rounded-full">edit</Button>
              <Button variant="destructive" className="rounded-full">delete</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
