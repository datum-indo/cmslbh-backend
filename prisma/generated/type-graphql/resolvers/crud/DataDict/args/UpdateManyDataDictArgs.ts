import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DataDictUpdateManyMutationInput } from "../../../inputs/DataDictUpdateManyMutationInput";
import { DataDictWhereInput } from "../../../inputs/DataDictWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDataDictArgs {
  @TypeGraphQL.Field(_type => DataDictUpdateManyMutationInput, {
    nullable: false
  })
  data!: DataDictUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DataDictWhereInput, {
    nullable: true
  })
  where?: DataDictWhereInput | undefined;
}
