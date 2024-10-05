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
      <TabsList className="grid w-full grid-cols-4 my-4">
        <TabsTrigger value="account" className="rounded-full"><span>Main</span></TabsTrigger>
        <TabsTrigger value="desert" className="rounded-full">Desert</TabsTrigger>
        <TabsTrigger value="drinks" className="rounded-full">Drinks</TabsTrigger>
        <TabsTrigger value="side-dish" className="rounded-full">Side Dish</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="desert">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="drinks">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="side-dish">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
              <div className="rounded-full w-full">
                <img
                  src='/images/fishmealhero.png'
                  alt="fooditem"
                  className="object-cover h-32 w-full rounded-lg"
                />
              </div>
              <div className="space-y-2 w-full space-x-6">
                <h1 className="font-bold px-6 mt-2">Fish Fillets</h1>
                <p id="name" className="text-sm">
                    The fish fillets are absolutely delicious, the texture is crunchy
                    on the tongue... <span className="text-blue-600">Readmore</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
                  <p className="font-extralight">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                  <FoodEdit/>
            </CardFooter>
          </Card>
          
        </div>
      </TabsContent>
    </Tabs>
  )
}
