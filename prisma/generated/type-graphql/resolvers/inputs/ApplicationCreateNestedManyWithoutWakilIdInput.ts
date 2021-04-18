import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutWakilIdInput } from "../inputs/ApplicationCreateOrConnectWithoutWakilIdInput";
import { ApplicationCreateWithoutWakilIdInput } from "../inputs/ApplicationCreateWithoutWakilIdInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationCreateNestedManyWithoutWakilIdInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutWakilIdInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutWakilIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutWakilIdInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutWakilIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;
}
