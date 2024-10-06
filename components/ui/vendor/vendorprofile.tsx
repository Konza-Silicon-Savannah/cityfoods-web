"use client"

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Cog6ToothIcon, PlusIcon } from '@heroicons/react/24/outline';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col items-start mb-6">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/images/home/avatar.png" alt="Profile" />
              <AvatarFallback>MF</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" value="Moss" readOnly />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" value="Fungi" readOnly />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <div className="flex">
                <Select defaultValue="+254">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="+254" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+254">+254</SelectItem>
                    {/* Add more country codes as needed */}
                  </SelectContent>
                </Select>
                <Input id="phoneNumber" value="123 4567 890" className="flex-1 ml-2" readOnly />
              </div>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="Nairobi (GMT +3)">
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nairobi (GMT +3)">Nairobi (GMT +3)</SelectItem>
                  {/* Add more timezones as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button className="mt-6 w-full sm:w-auto">Save Changes</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Account Overview</CardTitle>
          <Button variant="outline" size="sm">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add New Email
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Password</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Primary</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>mossfungione@gmail.com</TableCell>
                <TableCell>••••••••••</TableCell>
                <TableCell>
                  <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Unverified</span>
                </TableCell>
                <TableCell>
                  <Input type="radio" className="form-radio" checked readOnly />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Cog6ToothIcon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;