import { getAllNews } from "@/service/news";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  MoreVertical,
  Pencil,
  Trash2,
  Star,
  Plus,
} from "lucide-react";
import NewsActions from "../../_components/news-actions";


export default async function NewsPage() {

  const result = await getAllNews();

  const news = result?.data || [];


  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Manage News
          </h1>

          <p className="text-muted-foreground">
            Create, update and manage news articles
          </p>
        </div>


        <Button>
          <Plus className="mr-2 h-4 w-4"/>
          Add News
        </Button>


      </div>



      {/* Table */}

      <div className="rounded-md border">

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>
                Title
              </TableHead>

              <TableHead>
                Category
              </TableHead>

              <TableHead>
                Status
              </TableHead>

              <TableHead>
                Date
              </TableHead>

              <TableHead className="text-right">
                Actions
              </TableHead>

            </TableRow>

          </TableHeader>



          <TableBody>


            {
              news.map((item:any)=>(

                <TableRow key={item.id}>


                  <TableCell className="font-medium">

                    {item.title}
   

                  </TableCell>



                  <TableCell>

                    {item.category?.name || "N/A"}

                  </TableCell>



                  <TableCell>


                    {
                      item.isPremium ? (

                        <Badge>
                          ⭐ Premium
                        </Badge>

                      ) : (

                        <Badge variant="secondary">
                          Public
                        </Badge>

                      )
                    }


                  </TableCell>



                  <TableCell>

                    {
                      new Date(
                        item.createdAt
                      ).toLocaleDateString()
                    }

                  </TableCell>



                <TableCell className="text-right">

  <NewsActions item={item}/>

</TableCell>


                </TableRow>


              ))
            }



          </TableBody>


        </Table>


      </div>


    </div>
  );
}