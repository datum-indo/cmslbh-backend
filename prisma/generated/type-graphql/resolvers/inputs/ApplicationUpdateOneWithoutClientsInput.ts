import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutClientsInput } from "../inputs/ApplicationCreateOrConnectWithoutClientsInput";
import { ApplicationCreateWithoutClientsInput } from "../inputs/ApplicationCreateWithoutClientsInput";
import { ApplicationUpdateWithoutClientsInput } from "../inputs/ApplicationUpdateWithoutClientsInput";
import { ApplicationUpsertWithoutClientsInput } from "../inputs/ApplicationUpsertWithoutClientsInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpdateOneWithoutClientsInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutClientsInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutClientsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutClientsInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutClientsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutClientsInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutClientsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutClientsInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutClientsInput | undefined;
}
